import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundUpdateManyMutationInput } from "../../../inputs/Adyen_refundUpdateManyMutationInput";
import { Adyen_refundWhereInput } from "../../../inputs/Adyen_refundWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundUpdateManyMutationInput, {
    nullable: false
  })
  data!: Adyen_refundUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Adyen_refundWhereInput, {
    nullable: true
  })
  where?: Adyen_refundWhereInput | undefined;
}
