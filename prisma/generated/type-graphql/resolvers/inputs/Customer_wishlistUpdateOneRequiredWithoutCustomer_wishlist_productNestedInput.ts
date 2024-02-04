import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput";
import { Customer_wishlistCreateWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateWithoutCustomer_wishlist_productInput";
import { Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput";
import { Customer_wishlistUpsertWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistUpsertWithoutCustomer_wishlist_productInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput", {})
export class Customer_wishlistUpdateOneRequiredWithoutCustomer_wishlist_productNestedInput {
  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  create?: Customer_wishlistCreateWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  connectOrCreate?: Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistUpsertWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  upsert?: Customer_wishlistUpsertWithoutCustomer_wishlist_productInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_wishlistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput, {
    nullable: true
  })
  update?: Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput | undefined;
}
