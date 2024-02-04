import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesCreateInput } from "../../../inputs/Messenger_messagesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesCreateInput, {
    nullable: false
  })
  data!: Messenger_messagesCreateInput;
}
