import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesWhereUniqueInput } from "../../../inputs/Messenger_messagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMessenger_messagesOrThrowArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesWhereUniqueInput, {
    nullable: false
  })
  where!: Messenger_messagesWhereUniqueInput;
}
