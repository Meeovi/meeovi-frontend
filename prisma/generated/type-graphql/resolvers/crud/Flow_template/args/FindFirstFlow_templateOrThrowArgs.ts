import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_templateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Flow_templateOrderByWithRelationAndSearchRelevanceInput";
import { Flow_templateWhereInput } from "../../../inputs/Flow_templateWhereInput";
import { Flow_templateWhereUniqueInput } from "../../../inputs/Flow_templateWhereUniqueInput";
import { Flow_templateScalarFieldEnum } from "../../../../enums/Flow_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFlow_templateOrThrowArgs {
  @TypeGraphQL.Field(_type => Flow_templateWhereInput, {
    nullable: true
  })
  where?: Flow_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Flow_templateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Flow_templateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Flow_templateWhereUniqueInput, {
    nullable: true
  })
  cursor?: Flow_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Flow_templateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "config" | "created_at" | "updated_at"> | undefined;
}
