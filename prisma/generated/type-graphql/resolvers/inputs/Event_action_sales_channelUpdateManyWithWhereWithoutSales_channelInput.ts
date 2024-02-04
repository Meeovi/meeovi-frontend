import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelScalarWhereInput } from "../inputs/Event_action_sales_channelScalarWhereInput";
import { Event_action_sales_channelUpdateManyMutationInput } from "../inputs/Event_action_sales_channelUpdateManyMutationInput";

@TypeGraphQL.InputType("Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput", {})
export class Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Event_action_sales_channelScalarWhereInput, {
    nullable: false
  })
  where!: Event_action_sales_channelScalarWhereInput;

  @TypeGraphQL.Field(_type => Event_action_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Event_action_sales_channelUpdateManyMutationInput;
}
