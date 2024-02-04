import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyMediaInput } from "../inputs/Media_translationCreateManyMediaInput";

@TypeGraphQL.InputType("Media_translationCreateManyMediaInputEnvelope", {})
export class Media_translationCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_translationCreateManyMediaInput], {
    nullable: false
  })
  data!: Media_translationCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
