import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyCustom_entityInput } from "../inputs/CategoryCreateManyCustom_entityInput";

@TypeGraphQL.InputType("CategoryCreateManyCustom_entityInputEnvelope", {})
export class CategoryCreateManyCustom_entityInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyCustom_entityInput], {
    nullable: false
  })
  data!: CategoryCreateManyCustom_entityInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
