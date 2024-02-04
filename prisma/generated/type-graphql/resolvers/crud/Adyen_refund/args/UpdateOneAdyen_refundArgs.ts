import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundUpdateInput } from "../../../inputs/Adyen_refundUpdateInput";
import { Adyen_refundWhereUniqueInput } from "../../../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundUpdateInput, {
    nullable: false
  })
  data!: Adyen_refundUpdateInput;

  @TypeGraphQL.Field(_type => Adyen_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_refundWhereUniqueInput;
}
