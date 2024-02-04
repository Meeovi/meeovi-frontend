import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Messenger_messagesAvgOrderByAggregateInput } from "../inputs/Messenger_messagesAvgOrderByAggregateInput";
import { Messenger_messagesCountOrderByAggregateInput } from "../inputs/Messenger_messagesCountOrderByAggregateInput";
import { Messenger_messagesMaxOrderByAggregateInput } from "../inputs/Messenger_messagesMaxOrderByAggregateInput";
import { Messenger_messagesMinOrderByAggregateInput } from "../inputs/Messenger_messagesMinOrderByAggregateInput";
import { Messenger_messagesSumOrderByAggregateInput } from "../inputs/Messenger_messagesSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Messenger_messagesOrderByWithAggregationInput", {})
export class Messenger_messagesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  headers?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  queue_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  available_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  delivered_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Messenger_messagesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Messenger_messagesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Messenger_messagesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Messenger_messagesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Messenger_messagesSumOrderByAggregateInput | undefined;
}
