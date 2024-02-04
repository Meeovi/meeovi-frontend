import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_manufacturer_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_manufacturer_translationOrderByWithRelationAndSearchRelevanceInput";
import { Product_manufacturer_translationWhereInput } from "../../../inputs/Product_manufacturer_translationWhereInput";
import { Product_manufacturer_translationWhereUniqueInput } from "../../../inputs/Product_manufacturer_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_manufacturer_translationArgs {
  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereInput, {
    nullable: true
  })
  where?: Product_manufacturer_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturer_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_manufacturer_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_manufacturer_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
