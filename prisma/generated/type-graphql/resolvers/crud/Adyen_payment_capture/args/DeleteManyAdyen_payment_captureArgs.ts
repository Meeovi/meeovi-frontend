import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureWhereInput } from "../../../inputs/Adyen_payment_captureWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_captureWhereInput | undefined;
}
