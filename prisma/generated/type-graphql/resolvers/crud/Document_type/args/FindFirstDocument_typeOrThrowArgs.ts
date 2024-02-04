import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Document_typeOrderByWithRelationAndSearchRelevanceInput";
import { Document_typeWhereInput } from "../../../inputs/Document_typeWhereInput";
import { Document_typeWhereUniqueInput } from "../../../inputs/Document_typeWhereUniqueInput";
import { Document_typeScalarFieldEnum } from "../../../../enums/Document_typeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDocument_typeOrThrowArgs {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Document_typeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Document_typeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Document_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Document_typeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "technical_name" | "created_at" | "updated_at"> | undefined;
}
