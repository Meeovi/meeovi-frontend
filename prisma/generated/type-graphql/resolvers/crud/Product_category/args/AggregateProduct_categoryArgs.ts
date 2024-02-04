import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_categoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Product_categoryOrderByWithRelationAndSearchRelevanceInput";
import { Product_categoryWhereInput } from "../../../inputs/Product_categoryWhereInput";
import { Product_categoryWhereUniqueInput } from "../../../inputs/Product_categoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateProduct_categoryArgs {
  @TypeGraphQL.Field(_type => Product_categoryWhereInput, {
    nullable: true
  })
  where?: Product_categoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Product_categoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Product_categoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_categoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Product_categoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
