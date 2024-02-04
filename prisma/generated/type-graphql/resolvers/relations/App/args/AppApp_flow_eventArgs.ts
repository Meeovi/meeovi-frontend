import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_flow_eventOrderByWithRelationAndSearchRelevanceInput";
import { App_flow_eventWhereInput } from "../../../inputs/App_flow_eventWhereInput";
import { App_flow_eventWhereUniqueInput } from "../../../inputs/App_flow_eventWhereUniqueInput";
import { App_flow_eventScalarFieldEnum } from "../../../../enums/App_flow_eventScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AppApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_flow_eventOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_flow_eventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_flow_eventScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "name" | "aware" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
