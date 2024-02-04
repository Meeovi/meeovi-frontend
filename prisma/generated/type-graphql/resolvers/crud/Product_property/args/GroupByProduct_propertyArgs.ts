import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyOrderByWithAggregationInput } from "../../../inputs/Product_propertyOrderByWithAggregationInput";
import { Product_propertyScalarWhereWithAggregatesInput } from "../../../inputs/Product_propertyScalarWhereWithAggregatesInput";
import { Product_propertyWhereInput } from "../../../inputs/Product_propertyWhereInput";
import { Product_propertyScalarFieldEnum } from "../../../../enums/Product_propertyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  where?: Product_propertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Product_propertyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"product_id" | "product_version_id" | "property_group_option_id">;

  @TypeGraphQL.Field(_type => Product_propertyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Product_propertyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
