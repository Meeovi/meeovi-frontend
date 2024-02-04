import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesUpdateManyMutationInput } from "../../../inputs/Messenger_messagesUpdateManyMutationInput";
import { Messenger_messagesWhereInput } from "../../../inputs/Messenger_messagesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => Messenger_messagesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Messenger_messagesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Messenger_messagesWhereInput, {
    nullable: true
  })
  where?: Messenger_messagesWhereInput | undefined;
}
