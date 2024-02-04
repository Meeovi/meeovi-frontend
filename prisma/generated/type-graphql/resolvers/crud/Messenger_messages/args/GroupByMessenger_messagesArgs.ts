import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesOrderByWithAggregationInput } from "../../../inputs/Messenger_messagesOrderByWithAggregationInput";
import { Messenger_messagesScalarWhereWithAggregatesInput } from "../../../inputs/Messenger_messagesScalarWhereWithAggregatesInput";
import { Messenger_messagesWhereInput } from "../../../inputs/Messenger_messagesWhereInput";
import { Messenger_messagesScalarFieldEnum } from "../../../../enums/Messenger_messagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesWhereInput, {
    nullable: true
  })
  where?: Messenger_messagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Messenger_messagesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "body" | "headers" | "queue_name" | "created_at" | "available_at" | "delivered_at">;

  @TypeGraphQL.Field(_type => Messenger_messagesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Messenger_messagesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
