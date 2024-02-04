import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { App_payment_methodWhereInput } from "../../../inputs/App_payment_methodWhereInput";
import { App_payment_methodWhereUniqueInput } from "../../../inputs/App_payment_methodWhereUniqueInput";
import { App_payment_methodScalarFieldEnum } from "../../../../enums/App_payment_methodScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AppApp_payment_methodArgs {
  @TypeGraphQL.Field(_type => App_payment_methodWhereInput, {
    nullable: true
  })
  where?: App_payment_methodWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_payment_methodOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_payment_methodWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "payment_method_id" | "app_name" | "identifier" | "pay_url" | "finalize_url" | "validate_url" | "capture_url" | "refund_url" | "original_media_id" | "created_at" | "updated_at" | "recurring_url"> | undefined;
}
