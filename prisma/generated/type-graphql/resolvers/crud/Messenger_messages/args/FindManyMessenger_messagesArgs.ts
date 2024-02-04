import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Messenger_messagesOrderByWithRelationAndSearchRelevanceInput";
import { Messenger_messagesWhereInput } from "../../../inputs/Messenger_messagesWhereInput";
import { Messenger_messagesWhereUniqueInput } from "../../../inputs/Messenger_messagesWhereUniqueInput";
import { Messenger_messagesScalarFieldEnum } from "../../../../enums/Messenger_messagesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesWhereInput, {
    nullable: true
  })
  where?: Messenger_messagesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Messenger_messagesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Messenger_messagesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Messenger_messagesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Messenger_messagesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "body" | "headers" | "queue_name" | "created_at" | "available_at" | "delivered_at"> | undefined;
}
