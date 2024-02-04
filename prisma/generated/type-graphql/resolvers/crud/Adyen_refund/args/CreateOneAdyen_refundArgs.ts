import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundCreateInput } from "../../../inputs/Adyen_refundCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundCreateInput, {
    nullable: false
  })
  data!: Adyen_refundCreateInput;
}
