import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_flow_actionOrderByWithRelationAndSearchRelevanceInput";
import { App_flow_actionWhereInput } from "../../../inputs/App_flow_actionWhereInput";
import { App_flow_actionWhereUniqueInput } from "../../../inputs/App_flow_actionWhereUniqueInput";
import { App_flow_actionScalarFieldEnum } from "../../../../enums/App_flow_actionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_flow_actionOrThrowArgs {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_flow_actionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_flow_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "name" | "badge" | "url" | "delayable" | "parameters" | "config" | "headers" | "requirements" | "icon" | "sw_icon" | "created_at" | "updated_at"> | undefined;
}
