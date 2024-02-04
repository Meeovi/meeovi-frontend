import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionUpdateInput } from "../../../inputs/Event_actionUpdateInput";
import { Event_actionWhereUniqueInput } from "../../../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionUpdateInput, {
    nullable: false
  })
  data!: Event_actionUpdateInput;

  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: false
  })
  where!: Event_actionWhereUniqueInput;
}
