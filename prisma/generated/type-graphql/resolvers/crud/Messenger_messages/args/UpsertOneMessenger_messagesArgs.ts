import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesCreateInput } from "../../../inputs/Messenger_messagesCreateInput";
import { Messenger_messagesUpdateInput } from "../../../inputs/Messenger_messagesUpdateInput";
import { Messenger_messagesWhereUniqueInput } from "../../../inputs/Messenger_messagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesWhereUniqueInput, {
    nullable: false
  })
  where!: Messenger_messagesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Messenger_messagesCreateInput, {
    nullable: false
  })
  create!: Messenger_messagesCreateInput;

  @TypeGraphQL.Field(_type => Messenger_messagesUpdateInput, {
    nullable: false
  })
  update!: Messenger_messagesUpdateInput;
}
