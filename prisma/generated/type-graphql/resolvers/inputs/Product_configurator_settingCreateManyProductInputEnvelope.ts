import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyProductInput } from "../inputs/Product_configurator_settingCreateManyProductInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateManyProductInputEnvelope", {})
export class Product_configurator_settingCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateManyProductInput], {
    nullable: false
  })
  data!: Product_configurator_settingCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
