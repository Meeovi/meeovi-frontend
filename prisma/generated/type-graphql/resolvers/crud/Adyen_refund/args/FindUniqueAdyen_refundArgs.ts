import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundWhereUniqueInput } from "../../../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_refundWhereUniqueInput;
}
