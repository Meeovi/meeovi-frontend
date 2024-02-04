import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionOrderByWithAggregationInput } from "../../../inputs/Event_actionOrderByWithAggregationInput";
import { Event_actionScalarWhereWithAggregatesInput } from "../../../inputs/Event_actionScalarWhereWithAggregatesInput";
import { Event_actionWhereInput } from "../../../inputs/Event_actionWhereInput";
import { Event_actionScalarFieldEnum } from "../../../../enums/Event_actionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_actionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Event_actionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_actionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "event_name" | "action_name" | "config" | "custom_fields" | "active" | "migrated_flow_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Event_actionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Event_actionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
