import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyMediaInput } from "../inputs/CategoryCreateManyMediaInput";

@TypeGraphQL.InputType("CategoryCreateManyMediaInputEnvelope", {})
export class CategoryCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyMediaInput], {
    nullable: false
  })
  data!: CategoryCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
