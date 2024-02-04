import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateWithoutMediaInput } from "../inputs/Product_downloadCreateWithoutMediaInput";
import { Product_downloadUpdateWithoutMediaInput } from "../inputs/Product_downloadUpdateWithoutMediaInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadUpsertWithWhereUniqueWithoutMediaInput", {})
export class Product_downloadUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_downloadWhereUniqueInput, {
    nullable: false
  })
  where!: Product_downloadWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_downloadUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Product_downloadUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Product_downloadCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Product_downloadCreateWithoutMediaInput;
}
