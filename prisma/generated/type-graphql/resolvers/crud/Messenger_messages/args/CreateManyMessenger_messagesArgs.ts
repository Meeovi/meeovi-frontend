import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Messenger_messagesCreateManyInput } from "../../../inputs/Messenger_messagesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMessenger_messagesArgs {
  @TypeGraphQL.Field(_type => [Messenger_messagesCreateManyInput], {
    nullable: false
  })
  data!: Messenger_messagesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
