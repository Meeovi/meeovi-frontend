import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesWhereInput } from "../../../inputs/Messenger_messagesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesWhereInput, {
    nullable: true
  })
  where?: Messenger_messagesWhereInput | undefined;
}
