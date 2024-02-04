import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput";
import { Delivery_time_translationWhereInput } from "../../../inputs/Delivery_time_translationWhereInput";
import { Delivery_time_translationWhereUniqueInput } from "../../../inputs/Delivery_time_translationWhereUniqueInput";
import { Delivery_time_translationScalarFieldEnum } from "../../../../enums/Delivery_time_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDelivery_time_translationArgs {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereInput, {
    nullable: true
  })
  where?: Delivery_time_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Delivery_time_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"delivery_time_id" | "language_id" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
