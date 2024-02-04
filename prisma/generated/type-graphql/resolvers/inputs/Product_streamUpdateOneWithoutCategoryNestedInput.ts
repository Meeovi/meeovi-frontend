import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCreateOrConnectWithoutCategoryInput } from "../inputs/Product_streamCreateOrConnectWithoutCategoryInput";
import { Product_streamCreateWithoutCategoryInput } from "../inputs/Product_streamCreateWithoutCategoryInput";
import { Product_streamUpdateToOneWithWhereWithoutCategoryInput } from "../inputs/Product_streamUpdateToOneWithWhereWithoutCategoryInput";
import { Product_streamUpsertWithoutCategoryInput } from "../inputs/Product_streamUpsertWithoutCategoryInput";
import { Product_streamWhereInput } from "../inputs/Product_streamWhereInput";
import { Product_streamWhereUniqueInput } from "../inputs/Product_streamWhereUniqueInput";

@TypeGraphQL.InputType("Product_streamUpdateOneWithoutCategoryNestedInput", {})
export class Product_streamUpdateOneWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => Product_streamCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Product_streamCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Product_streamCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpsertWithoutCategoryInput, {
    nullable: true
  })
  upsert?: Product_streamUpsertWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  disconnect?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereInput, {
    nullable: true
  })
  delete?: Product_streamWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_streamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateToOneWithWhereWithoutCategoryInput, {
    nullable: true
  })
  update?: Product_streamUpdateToOneWithWhereWithoutCategoryInput | undefined;
}
