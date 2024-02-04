import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldCreateWithoutProduct_search_config_fieldInput } from "../inputs/Custom_fieldCreateWithoutProduct_search_config_fieldInput";
import { Custom_fieldWhereUniqueInput } from "../inputs/Custom_fieldWhereUniqueInput";

@TypeGraphQL.InputType("Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput", {})
export class Custom_fieldCreateOrConnectWithoutProduct_search_config_fieldInput {
  @TypeGraphQL.Field(_type => Custom_fieldWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_fieldWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_fieldCreateWithoutProduct_search_config_fieldInput, {
    nullable: false
  })
  create!: Custom_fieldCreateWithoutProduct_search_config_fieldInput;
}
