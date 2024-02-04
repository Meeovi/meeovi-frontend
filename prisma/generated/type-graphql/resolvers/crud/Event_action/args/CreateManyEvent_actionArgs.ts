import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionCreateManyInput } from "../../../inputs/Event_actionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvent_actionArgs {
  @TypeGraphQL.Field(_type => [Event_actionCreateManyInput], {
    nullable: false
  })
  data!: Event_actionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
