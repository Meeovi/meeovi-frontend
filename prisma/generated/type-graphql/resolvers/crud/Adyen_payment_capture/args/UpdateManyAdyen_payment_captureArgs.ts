import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureUpdateManyMutationInput } from "../../../inputs/Adyen_payment_captureUpdateManyMutationInput";
import { Adyen_payment_captureWhereInput } from "../../../inputs/Adyen_payment_captureWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_payment_captureUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_captureWhereInput | undefined;
}
