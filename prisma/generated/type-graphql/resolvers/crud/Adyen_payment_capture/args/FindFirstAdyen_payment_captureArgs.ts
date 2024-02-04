import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_captureOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Adyen_payment_captureOrderByWithRelationAndSearchRelevanceInput";
import { Adyen_payment_captureWhereInput } from "../../../inputs/Adyen_payment_captureWhereInput";
import { Adyen_payment_captureWhereUniqueInput } from "../../../inputs/Adyen_payment_captureWhereUniqueInput";
import { Adyen_payment_captureScalarFieldEnum } from "../../../../enums/Adyen_payment_captureScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAdyen_payment_captureArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_captureWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_captureOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureWhereUniqueInput, {
    nullable: true
  })
  cursor?: Adyen_payment_captureWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_captureScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "order_transaction_id" | "psp_reference" | "source" | "status" | "created_at" | "updated_at" | "amount"> | undefined;
}
