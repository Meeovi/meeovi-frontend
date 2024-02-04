import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateManyProductInputEnvelope } from "../inputs/Customer_wishlist_productCreateManyProductInputEnvelope";
import { Customer_wishlist_productCreateOrConnectWithoutProductInput } from "../inputs/Customer_wishlist_productCreateOrConnectWithoutProductInput";
import { Customer_wishlist_productCreateWithoutProductInput } from "../inputs/Customer_wishlist_productCreateWithoutProductInput";
import { Customer_wishlist_productScalarWhereInput } from "../inputs/Customer_wishlist_productScalarWhereInput";
import { Customer_wishlist_productUpdateManyWithWhereWithoutProductInput } from "../inputs/Customer_wishlist_productUpdateManyWithWhereWithoutProductInput";
import { Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput";
import { Customer_wishlist_productUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Customer_wishlist_productUpsertWithWhereUniqueWithoutProductInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productUpdateManyWithoutProductNestedInput", {})
export class Customer_wishlist_productUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateWithoutProductInput], {
    nullable: true
  })
  create?: Customer_wishlist_productCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlist_productCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Customer_wishlist_productUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlist_productCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlist_productWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Customer_wishlist_productUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Customer_wishlist_productUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlist_productScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_wishlist_productScalarWhereInput[] | undefined;
}
