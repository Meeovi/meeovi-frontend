import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesUpdateInput } from "../../../inputs/Messenger_messagesUpdateInput";
import { Messenger_messagesWhereUniqueInput } from "../../../inputs/Messenger_messagesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesUpdateInput, {
    nullable: false
  })
  data!: Messenger_messagesUpdateInput;

  @TypeGraphQL.Field(_type => Messenger_messagesWhereUniqueInput, {
    nullable: false
  })
  where!: Messenger_messagesWhereUniqueInput;
}
