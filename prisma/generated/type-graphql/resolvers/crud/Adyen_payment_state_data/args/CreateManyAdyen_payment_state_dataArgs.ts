import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataCreateManyInput } from "../../../inputs/Adyen_payment_state_dataCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataCreateManyInput], {
    nullable: false
  })
  data!: Adyen_payment_state_dataCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
