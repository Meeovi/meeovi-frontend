import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TagOrderByWithRelationAndSearchRelevanceInput";
import { TagWhereInput } from "../../../inputs/TagWhereInput";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";
import { TagScalarFieldEnum } from "../../../../enums/TagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTagArgs {
  @TypeGraphQL.Field(_type => TagWhereInput, {
    nullable: true
  })
  where?: TagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: TagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  cursor?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "created_at" | "updated_at"> | undefined;
}
