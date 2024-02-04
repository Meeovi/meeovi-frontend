import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/System_configOrderByWithRelationAndSearchRelevanceInput";
import { System_configWhereInput } from "../../../inputs/System_configWhereInput";
import { System_configWhereUniqueInput } from "../../../inputs/System_configWhereUniqueInput";
import { System_configScalarFieldEnum } from "../../../../enums/System_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSystem_configOrThrowArgs {
  @TypeGraphQL.Field(_type => System_configWhereInput, {
    nullable: true
  })
  where?: System_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [System_configOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: System_configOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => System_configWhereUniqueInput, {
    nullable: true
  })
  cursor?: System_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [System_configScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "configuration_key" | "configuration_value" | "sales_channel_id" | "created_at" | "updated_at"> | undefined;
}
