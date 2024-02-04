import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataWhereInput } from "../../../inputs/Adyen_payment_state_dataWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_state_dataWhereInput | undefined;
}
