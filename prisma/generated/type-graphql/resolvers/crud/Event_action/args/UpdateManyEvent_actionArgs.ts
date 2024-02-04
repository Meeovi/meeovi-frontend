import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_actionUpdateManyMutationInput } from "../../../inputs/Event_actionUpdateManyMutationInput";
import { Event_actionWhereInput } from "../../../inputs/Event_actionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvent_actionArgs {
  @TypeGraphQL.Field(_type => Event_actionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Event_actionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;
}
