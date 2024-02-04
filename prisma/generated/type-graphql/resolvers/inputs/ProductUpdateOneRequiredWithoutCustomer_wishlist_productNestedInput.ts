import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateOrConnectWithoutCustomer_wishlist_productInput";
import { ProductCreateWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateWithoutCustomer_wishlist_productInput";
import { ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput } from "../inputs/ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput";
import { ProductUpsertWithoutCustomer_wishlist_productInput } from "../inputs/ProductUpsertWithoutCustomer_wishlist_productInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput", {})
export class ProductUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  create?: ProductCreateWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  update?: ProductUpdateToOneWithWhereWithoutCustomer_wishlist_productInput | undefined;
}
