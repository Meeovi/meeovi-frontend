import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Shipping_method_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Shipping_method_tagOrderByWithRelationAndSearchRelevanceInput";
import { Shipping_method_tagWhereInput } from "../../../inputs/Shipping_method_tagWhereInput";
import { Shipping_method_tagWhereUniqueInput } from "../../../inputs/Shipping_method_tagWhereUniqueInput";
import { Shipping_method_tagScalarFieldEnum } from "../../../../enums/Shipping_method_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstShipping_method_tagArgs {
  @TypeGraphQL.Field(_type => Shipping_method_tagWhereInput, {
    nullable: true
  })
  where?: Shipping_method_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Shipping_method_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Shipping_method_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Shipping_method_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"shipping_method_id" | "tag_id"> | undefined;
}
