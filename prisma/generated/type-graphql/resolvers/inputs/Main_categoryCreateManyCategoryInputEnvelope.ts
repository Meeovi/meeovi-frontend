import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManyCategoryInput } from "../inputs/Main_categoryCreateManyCategoryInput";

@TypeGraphQL.InputType("Main_categoryCreateManyCategoryInputEnvelope", {})
export class Main_categoryCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Main_categoryCreateManyCategoryInput], {
    nullable: false
  })
  data!: Main_categoryCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
