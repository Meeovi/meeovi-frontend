import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCustom_entityInputEnvelope } from "../inputs/CategoryCreateManyCustom_entityInputEnvelope";
import { CategoryCreateOrConnectWithoutCustom_entityInput } from "../inputs/CategoryCreateOrConnectWithoutCustom_entityInput";
import { CategoryCreateWithoutCustom_entityInput } from "../inputs/CategoryCreateWithoutCustom_entityInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutCustom_entityInput", {})
export class CategoryCreateNestedManyWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutCustom_entityInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutCustom_entityInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCustom_entityInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyCustom_entityInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyCustom_entityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
