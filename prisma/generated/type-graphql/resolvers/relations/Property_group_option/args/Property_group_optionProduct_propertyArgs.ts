import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_propertyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_propertyOrderByWithRelationAndSearchRelevanceInput";
import { Product_propertyWhereInput } from "../../../inputs/Product_propertyWhereInput";
import { Product_propertyWhereUniqueInput } from "../../../inputs/Product_propertyWhereUniqueInput";
import { Product_propertyScalarFieldEnum } from "../../../../enums/Product_propertyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Property_group_optionProduct_propertyArgs {
  @TypeGraphQL.Field(_type => Product_propertyWhereInput, {
    nullable: true
  })
  where?: Product_propertyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_propertyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_propertyWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_propertyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"product_id" | "product_version_id" | "property_group_option_id"> | undefined;
}
