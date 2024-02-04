import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_configOrderByWithRelationAndSearchRelevanceInput";
import { App_configWhereInput } from "../../../inputs/App_configWhereInput";
import { App_configWhereUniqueInput } from "../../../inputs/App_configWhereUniqueInput";
import { App_configScalarFieldEnum } from "../../../../enums/App_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_configArgs {
  @TypeGraphQL.Field(_type => App_configWhereInput, {
    nullable: true
  })
  where?: App_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_configOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_configOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_configWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_configScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"key" | "value"> | undefined;
}
