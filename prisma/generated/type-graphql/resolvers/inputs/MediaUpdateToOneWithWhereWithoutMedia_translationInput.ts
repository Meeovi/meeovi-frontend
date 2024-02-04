import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutMedia_translationInput } from "../inputs/MediaUpdateWithoutMedia_translationInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutMedia_translationInput", {})
export class MediaUpdateToOneWithWhereWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_translationInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutMedia_translationInput;
}
