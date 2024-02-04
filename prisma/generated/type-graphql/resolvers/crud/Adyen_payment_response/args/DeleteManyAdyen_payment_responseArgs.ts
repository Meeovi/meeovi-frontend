import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_responseWhereInput } from "../../../inputs/Adyen_payment_responseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAdyen_payment_responseArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_responseWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_responseWhereInput | undefined;
}
