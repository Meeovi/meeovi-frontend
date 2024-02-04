import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingCreateManyMediaInput } from "../inputs/Product_configurator_settingCreateManyMediaInput";

@TypeGraphQL.InputType("Product_configurator_settingCreateManyMediaInputEnvelope", {})
export class Product_configurator_settingCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_configurator_settingCreateManyMediaInput], {
    nullable: false
  })
  data!: Product_configurator_settingCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
