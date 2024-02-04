import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_refundCreateInput } from "../../../inputs/Adyen_refundCreateInput";
import { Adyen_refundUpdateInput } from "../../../inputs/Adyen_refundUpdateInput";
import { Adyen_refundWhereUniqueInput } from "../../../inputs/Adyen_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAdyen_refundArgs {
  @TypeGraphQL.Field(_type => Adyen_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Adyen_refundWhereUniqueInput;

  @TypeGraphQL.Field(_type => Adyen_refundCreateInput, {
    nullable: false
  })
  create!: Adyen_refundCreateInput;

  @TypeGraphQL.Field(_type => Adyen_refundUpdateInput, {
    nullable: false
  })
  update!: Adyen_refundUpdateInput;
}
